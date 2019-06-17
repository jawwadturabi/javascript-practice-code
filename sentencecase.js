    var theString='my Name is John'
    var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,
    function(c)
    {return c.toUpperCase()});
  console.log (newString)


