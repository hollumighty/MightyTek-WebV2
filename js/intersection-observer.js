const faders = document.querySelectorAll('.fade-in');
// const slideInLeft = document.querySelectorAll('.from-left');
// const slideInRight = document.querySelectorAll('.from-right');

const appearOptions = {
    threshold: 0.3
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            entry.target.classList.remove('appear');
        } else {
            entry.target.classList.add('appear');
            // appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


// const slideLeftOptions = {
//     threshold: 0.2
// }

// const slideLeftOnScroll = new IntersectionObserver(function(entries, slideLeftOnScroll){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             entry.target.classList.remove('appear');
//         } else {
//             entry.target.classList.add('appear');
//             // appearOnScroll.unobserve(entry.target);
//         }
//     })
// }, slideLeftOptions);

// slideInLeft.forEach(slideLeft => {
//     slideLeftOnScroll.observe(slideLeft)
// })

// const slideRightOptions = {
//     threshold: 0.2
// }

// const slideRightOnScroll = new IntersectionObserver(function(entries, slideRightOnScroll){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             entry.target.classList.remove('appear');
//         } else {
//             entry.target.classList.add('appear');
//             // appearOnScroll.unobserve(entry.target);
//         }
//     })
// }, slideRightOptions);

// slideInRight.forEach(slideRight => {
//     slideRightOnScroll.observe(slideRight)
// })


// // from-left-t1 --set threshold to 1 --set transform to 100 multiple

// // from-left -- transform 50 multiple
// //from-right-100 -- set transform to 100%

