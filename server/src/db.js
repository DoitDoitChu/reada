import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
  `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_ENDPOINT}:27017/reada`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once('open', handleOpen);
db.on('error', handleError);
