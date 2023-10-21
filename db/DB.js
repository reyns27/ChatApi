import {Pool, Client} from 'pg';

const CredentialDB = {
    user:'admin',
    database:'db_kzck',
    port:5432,
    host:'postgres://admin:CYTe6xI3oP5MbqRGHEvJuqRWxSu41cMm@dpg-cknbi1iv7m0s73cbup7g-a.oregon-postgres.render.com/db_kzck'
}
export const DB = new Pool(CredentialDB);
export const CLientDB = new Client(CredentialDB);