
(function () {
    emailjs.init('R54vonq60--MSFUad');
})();

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();  
    const form = this;
    try {
        await emailjs.sendForm('service_6jwnusv', 'template_yu1p8vc', form);
        showToast();
        form.reset();
    } catch (error) {
        console.error(error);
        alert('Something went wrong. Please try again later.');
    }
});

//toast notification
function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("show");
  
    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
}

//file download
document.getElementById('downloadCvButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/file/amal-resume.pdf'; 
    link.download = 'amal-resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

//url redirecting
function openUrl(elementId, url) {
    document.getElementById(elementId).addEventListener('click', function() {
        window.open(url, '_blank');
    });
}  


// document.addEventListener('DOMContentLoaded', () => {
//   const elements = document.querySelectorAll('.pic1, .pic2, .pic3, .pic4, .pic5, .pic6, .laptop-img');
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('move');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.5 });

//   elements.forEach(element => {
//     observer.observe(element);
//   });
// });

  
openUrl('githubFlood', 'https://github.com/amalsaj/Flood-Prediction-using-Machine-Learning');
openUrl('githubEmp', 'https://github.com/amalsaj/EmployeeClient');
openUrl('githubNetflix', 'https://github.com/amalsaj/netflixClone2.0');
openUrl('githubMusic', 'https://github.com/amalsaj/personalizedMusicClient');
openUrl('githubKtu', 'https://github.com/amalsaj/KTU-website-redesign-using-React');
openUrl('githubToDo', 'https://github.com/amalsaj/todoClient');
openUrl('githubManage', 'https://github.com/amalsaj/taskManagerClient');
openUrl('githubEvent', 'https://github.com/amalsaj/eventServer');

openUrl('deployEmp', 'https://employee-client-three.vercel.app/');
openUrl('deployNetflix', 'https://netflix-clone2-0-xi.vercel.app/');
openUrl('deployToDo', 'https://todo-client-mu-rosy.vercel.app/');
openUrl('deployManage', 'https://task-manager-client-lake.vercel.app/');
openUrl('deployMusic', 'https://personalized-music-client.vercel.app/');
openUrl('deployEvent', 'https://event-client-mauve.vercel.app/');