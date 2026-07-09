import mongoose, { Mongoose } from 'mongoose';

const hospitalHoursSchema = mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  hours: {
    type: Number,
    required: true,
  },
});

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    qualifiaction: {
      type: String,
      required: true,
    },

    experienceInYears: {
      type: Number,
      default: 0,
    },

    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],

    workInHours: {
      type: [hospitalHoursSchema],
    },

    age: {
      type: Number,
    },

    registrationNo: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
