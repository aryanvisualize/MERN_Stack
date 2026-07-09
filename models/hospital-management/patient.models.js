import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  Name : {
    type : String,
    required : true,
  },

  diagnosedWith : {
    type : String,
    required : true,
  },

  address : {
    type : String,
    required : true,
  },

  age : {
    type : Number,
    required : true,
  },

  bloodGroup : {
    type : String,
    required : true,
  },

  sex : {
    type : String,
    ennum : ['Male', 'Female', 'Trans'],
    required : true,
  },

  admittedIn: {
    type : mongoose.Schema.Types.ObjectId;
    ref : "Hospital"
  },
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);
