function submitButton(){
    return(
        <Button
    type="submit"
    variant="contained"
    color="primary"
    onClick={(e) =>console.log(patient)}
    sx={{margin:1}}
  >
    Submit
  </Button>
    )
}
function finishButton()