
import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const {register, handleSubmit, formState: { errors,isSubmitting }} = useForm();

  async function onSubmit(data){
    //Submit an API call
    await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("submitting the form",data);
    } 
    

    return (
      <>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="">First Name:</label>
              <input className= {errors.firstname ? 'input-error' : ""}
              {...register('firstname', 
                {
                  required: true,
                  minLength: {value:3, message:'Min length atleast 3'},
                })}/>
                {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}

            </div>
            <br />
            <div>
              <label htmlFor="">Middle Name:</label>
              <input {...register('middlename')}/>
            </div>
            <br />
            <div>
              <label htmlFor="">Last Name:</label>
              <input className={errors.lastname ? 'input-error' : ""}
              {...register('lastname', 
              {
                required: true,
                maxLength: {value:7, message:'Max length atmost 7'},
              })}/>
              {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
            </div>
            <br />
            <input type="submit" disabled={isSubmitting}
            value= {isSubmitting ? "Submitting" : "Submit"}
            />
        </form>
      </>
    )
}

export default App
