let text = `
Initializing birthday protocol...
Loading happiness modules...
User detected: Akansha
Role: CS Student

Output:
Happy Birthday 🎂
`;

let i = 0;

function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type,40);
}
}

type();
