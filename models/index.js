import db from '../utils/connection.js';
import customer from './customer.js';
import karyawan from './karyawan.js';
import progres from './progres.js';
import status from './status.js';
import waktu from './waktu.js';


await db.sync({force:true});    