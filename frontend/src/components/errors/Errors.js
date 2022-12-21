export default function Errors({results,errors}){
  return (
      <div>
          <div className={'error'}>{errors.color && <span> Color field is required </span>} </div>
          <div className={'error'}>{errors.username && <span> Username field is required (please use only Latin alphabet or/and numbers) </span>} </div>
          <div className={'error'}>{results.message && <span> Such username already exist, please choose another one</span>} </div>
      </div>
  );
}