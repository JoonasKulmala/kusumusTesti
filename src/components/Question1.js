import React,  { useState, useEffect }from 'react';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




export default function Question1 () {

    

    const [question, setQuestion] = useState('');
    const [content, setContent] = useState('');
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
  
    const [values, setValues] = React.useState()
  
  
    const handleChange = (event) => {
     setValues(event.target.value);
    };
    
     
    useEffect(() => fetchdata(), );
  
    const fetchdata = () => {
    fetch('https://apitestingnew.herokuapp.com/kyselies')
    .then(response => response.json())
    .then(responseData => {
      setQuestion(responseData._embedded.kyselies[0].question);
      setContent(responseData._embedded.kyselies[0].content);
      setContent1(responseData._embedded.kyselies[0].content1);
      setContent2(responseData._embedded.kyselies[0].content2);
      
      
      console.log(values);
    })
    .catch(err => console.error(err));
  };
  
 
 

  return (
    <div>
    
    <FormControl  component="fieldset">
      <FormLabel component="legend">Kyssäri</FormLabel>
      <RadioGroup aria-label="kyssäri" name="kyssäri1" value={values} onChange={handleChange}>
        <FormControlLabel value={content} control={<Radio />} label={content} />
        <FormControlLabel value={content1} control={<Radio />} label={content1} />
        <FormControlLabel value={content2} control={<Radio />} label={content2} />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
 


</div>   

  );

}