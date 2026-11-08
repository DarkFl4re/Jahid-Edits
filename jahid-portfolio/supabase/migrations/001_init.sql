create table profiles(id int primary key default 1,name text,title text,bio text,photo_url text);
create table projects(id uuid primary key default gen_random_uuid(),name text not null,description text,image_url text,tech text[],live_url text,repo_url text,created_at timestamptz default now());
create table certificates(id uuid primary key default gen_random_uuid(),title text,issuer text,image_url text,date date);
create table achievements(id uuid primary key default gen_random_uuid(),title text,description text);
create table social_links(id uuid primary key default gen_random_uuid(),platform text,url text);
create table messages(id uuid primary key default gen_random_uuid(),name text,email text,subject text,message text,created_at timestamptz default now());
create table comments(id uuid primary key default gen_random_uuid(),name text not null,body text not null,avatar_url text,approved boolean default true,created_at timestamptz default now());
create table admins(user_id uuid primary key references auth.users);
create function is_admin() returns boolean language sql security definer as $$select exists(select 1 from admins where user_id=auth.uid())$$;
do $$ declare t text; begin
 foreach t in array array['profiles','projects','certificates','achievements','social_links','messages','comments'] loop
  execute format('alter table %I enable row level security',t);
  execute format('create policy "admin all" on %I for all using(is_admin()) with check(is_admin())',t);
 end loop;
 foreach t in array array['profiles','projects','certificates','achievements','social_links'] loop
  execute format('create policy "public read" on %I for select using(true)',t);
 end loop; end $$;
create policy "public insert msg" on messages for insert with check(true);
create policy "public read comments" on comments for select using(approved);
create policy "public insert comment" on comments for insert with check(true);
alter table admins enable row level security;
-- After creating your user in Supabase Auth: insert into admins values ('<your-user-uuid>');
