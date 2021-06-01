export function Form() {
return (
    <form  >
    <label htmlFor='name'>Name:</label>
    <input type='text' className='input-field' id='name' />
    <br /><br />
    <label htmlFor='address'>Address:</label>
    <input type='text' className='input-field' id='address' />
    <br /><br />
    <label htmlFor='home-phone'>Home Phone:</label>
    <input type='tel' className='input-field' id='home-phone' />
    <br /><br />
    <label htmlFor='mobile-phone'>Mobile Phone:</label>
    <input type='tel' className='input-field' id='mobile-phone' />
    <br /><br />
    {/* I have moved the button below to base.js. Is it better here or there??? */}
    
    {/* <button className="btn btn-primary" id="name-submit" >Submit</button> */}
</form>   
)
}



