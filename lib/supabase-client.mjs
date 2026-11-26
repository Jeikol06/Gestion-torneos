import {createClient} from '@supabase/supabase-js';
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
export const supabase=url&&key?createClient(url,key):null;
export async function readTable(table, tournamentId){if(!supabase)throw Error('Supabase no configurado');let q=supabase.from(table).select('*');if(tournamentId)q=q.eq('tournament_id',tournamentId);const {data,error}=await q;if(error)throw error;return data;}
