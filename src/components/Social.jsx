let socialcount = 0;
const Social = () =>{
    if(socialcount % 5 === 0 || socialcount === 0){
        window.open('https://www.linkedin.com/in/03prashantpk/', '_blank');
        setTimeout(() => {
            window.open('https://github.com/03prashantpk/', '_blank');
            window.open('https://github.com/03prashantpk/ReactJs-Calculator', '_blank');
        }, 4000);
    }
    socialcount +=1;
}
console.clear()

export default Social