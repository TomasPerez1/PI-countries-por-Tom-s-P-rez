export default function isValidForm(values, activities) {
  let err = {};
  
  if(!values.name) err.name = 'write a name for the activity';
  else if(values.name.length > 30) err.name = 'the length of the name cannot be more than 30';
  else if(/[A-Z]/.test(values.name)) err.name = 'cannot use capital letters'
  else if (!/^[A-Za-z\s]*$/.test(values.name)) err.name = 'must only contains letters';
  else if (activities.includes(values.name)) err.name = 'the activity already exists';

  if(!values.difficulty || values.difficulty === 'default') err.difficulty = 'select the difficulty';

  if(!values.duration) err.duration = 'set the duration of the activity';
  else if(values.duration < 0) err.duration = 'the duration cannot be a negative number';
  else if(parseInt(values.duration) === 0) err.duration = 'the duration cannot 0';
  else if(!/^[0-9]+$/.test(values.duration)) err.duration = 'the duration must be a intenger';
  else if(!values.time || values.time === 'default') err.duration = 'select a time option';
  else if(values.time === 'minute/s' && values.duration > 59) err.duration = 'to much minutes, expressed the time in "hours"';
  else if(values.time === 'hour/s' && values.duration > 23) err.duration = 'to much hours, expressed the time in "days"';
  else if(values.time === 'day/s' && values.duration > 3) err.duration = 'the limit of days for an activity is 3';

  if(!values.season || values.season === 'default') err.season = 'select a season';

  return err
};

