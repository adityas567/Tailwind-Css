const sun=document.querySelector('.sun');
const moon=document.querySelector('.moon');

const userTheme=localStorage.getItem('theme');
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(userTheme);
console.log(systemTheme);
console.log(sun);
console.log(moon);
const iconToggle=()=>
{
    sun.classList.toggle('display-none');
    moon.classList.toggle('display-none');
}

const themeCheck=()=>
{
    if(userTheme==="dark"||(!userTheme && systemTheme))
    {
        document.documentElement.classList.add('dark');
        moon.classList.add('display-none');
        return;
    }
    sun.classList.add('display-none');
}

const lightTheme=()=>
{
    document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        iconToggle();
}

const darkTheme=()=>
{
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    iconToggle();
}



sun.addEventListener('click',()=>
{
    lightTheme();
    console.log('sun')
})

moon.addEventListener('click',()=>
{
    darkTheme();
    console.log('moon');
})

themeCheck();

