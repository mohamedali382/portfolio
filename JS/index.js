const Nav = document.getElementById("navBar");
const items = document.getElementById("item");
const unOrdList = document.getElementById("unOrdList");
const Lists = document.querySelectorAll('.List');
const layer = document.getElementById('layer');


function move()
{
    Nav.style.height = '60vh';
    Nav.style.transition = 'ease-in-out';
    Nav.style.transition = '1s';
    Nav.style.display = 'flex';
    Nav.style.flexDirection = 'column';
    layer.style.height = '50vh';
    layer.style.transition = 'ease-in-out';
    layer.style.transition = '1s';
    items.style.position = 'absolute';
    unOrdList.style.display = 'flex';
    unOrdList.style.flexDirection = 'column';
    unOrdList.style.justifyContent = 'space-around';
    unOrdList.style.left = '0%';
    unOrdList.style.width = '100%';
    unOrdList.style.height = '40vh';
    unOrdList.style.position = 'absolute';
    unOrdList.style.marginTop = '15%';


    Lists.forEach(list => {
        list.style.width = '100%';
        list.style.height = '100%';
        // list.style.backgroundColor = 'red';
});
}

function reset(){
    Nav.style.height = '10vh';
    Nav.style.transition = 'ease-in-out';
    Nav.style.transition = '1s';

    layer.style.height = '10vh';
    layer.style.transition = 'ease-in-out';
    layer.style.transition = '1s';

    unOrdList.style.display = 'none';
    
}



function toggleMenu(){
    if (parseInt(Nav.style.height) <= 10) {
        move();
    } else {
        reset();
    }
}



                    // switched divations

                    document.addEventListener("DOMContentLoaded", function() {
                        const firstDiv = document.getElementById('Image_1');
                        const secondDiv = document.getElementById('Image_2');
                        const thirdDiv = document.getElementById('Image_3');
            
                        const originalProperties = {
                            firstDiv: {
                                right: '0',
                                top: '0',
                                width: '54%',
                                height: '55%',
                            },
                            secondDiv: {
                                right: '24%',
                                top: '0',
                                width: '54%',
                                height: '60%',
                            },
                            thirdDiv: {
                                marginLeft: '0',
                                top: '0',
                                width: '54%',
                                height: '55%',
                            },
                        };
            
                        function resetStyles(element, properties) {
                            for (const [key, value] of Object.entries(properties)) {
                                element.style[key] = value;
                            }
                        }
            
                        function move1() {
                            resetStyles(firstDiv, originalProperties.firstDiv);
                            resetStyles(secondDiv, originalProperties.secondDiv);
                            resetStyles(thirdDiv, originalProperties.thirdDiv);
            
                            firstDiv.style.right = '25%';
                            firstDiv.style.top = '20%';
                            firstDiv.style.transition = '3s';
                            firstDiv.style.zIndex = 2;
                            firstDiv.style.width = '54%';
                            firstDiv.style.height = '60%';
            
                            secondDiv.style.right = '45%';
                            secondDiv.style.top = '23%';
                            secondDiv.style.transition = '2.8s';
                            secondDiv.style.zIndex = 1;
                            secondDiv.style.width = '54%';
                            secondDiv.style.height = '55%';
                            secondDiv.style.opacity = '50%';
            
                            thirdDiv.style.marginLeft = '45%';
                            thirdDiv.style.top = '23%';
                            thirdDiv.style.transition = '2.8s';
                            thirdDiv.style.zIndex = -1;
                            thirdDiv.style.width = '54%';
                            thirdDiv.style.height = '55%';
                            thirdDiv.style.opacity = '50%';
                        }
            
                        function move2() {
                            resetStyles(firstDiv, originalProperties.firstDiv);
                            resetStyles(secondDiv, originalProperties.secondDiv);
                            resetStyles(thirdDiv, originalProperties.thirdDiv);
            
                            firstDiv.style.right = '45%';
                            firstDiv.style.top = '23%';
                            firstDiv.style.transition = '2.8s';
                            firstDiv.style.zIndex = 1;
                            firstDiv.style.width = '54%';
                            firstDiv.style.height = '55%';
                            firstDiv.style.opacity = '50%';
            
                            secondDiv.style.right = '5%';
                            secondDiv.style.top = '23%';
                            secondDiv.style.transition = '2.8s';
                            secondDiv.style.zIndex = -1;
                            secondDiv.style.width = '54%';
                            secondDiv.style.height = '55%';
                            secondDiv.style.opacity = '50%';
            
                            thirdDiv.style.right = '25%';
                            thirdDiv.style.top = '20%';
                            thirdDiv.style.transition = '3s';
                            thirdDiv.style.zIndex = 2;
                            thirdDiv.style.width = '54%';
                            thirdDiv.style.height = '60%';
                            thirdDiv.style.opacity = '100%';
                        }
            
                        function move3() {
                            resetStyles(firstDiv, originalProperties.firstDiv);
                            resetStyles(secondDiv, originalProperties.secondDiv);
                            resetStyles(thirdDiv, originalProperties.thirdDiv);
            
                            firstDiv.style.right = '0%';
                            firstDiv.style.top = '23%';
                            firstDiv.style.transition = '3s';
                            firstDiv.style.zIndex = -1;
                            firstDiv.style.width = '54%';
                            firstDiv.style.height = '55%';
                            firstDiv.style.opacity = '50%';
            
                            secondDiv.style.right = '24%';
                            secondDiv.style.top = '20%';
                            secondDiv.style.transition = '2.5s';
                            secondDiv.style.zIndex = 2;
                            secondDiv.style.width = '54%';
                            secondDiv.style.height = '60%';
                            secondDiv.style.opacity = '100%';
            
                            thirdDiv.style.marginRight = '21%';
                            thirdDiv.style.top = '23%';
                            thirdDiv.style.transition = '2.8s';
                            thirdDiv.style.zIndex = 1;
                            thirdDiv.style.width = '54%';
                            thirdDiv.style.height = '55%';
                            thirdDiv.style.opacity = '50%';
                        }
            
                        const observerOptions = {
                            root: null,
                            rootMargin: '0px',
                            threshold: 0.1
                        };
            
                        function observerCallback(entries, observer) {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    // Start the animations
                                    move1();
                                    setTimeout(move2, 5000);
                                    setTimeout(move3, 10000);
                                    observer.unobserve(entry.target); // Optional: stop observing after animation
                                }
                            });
                        }
            
                        const observer = new IntersectionObserver(observerCallback, observerOptions);
                        observer.observe(document.querySelector('.section_two'));
                    });

// Card Animation

document.addEventListener("DOMContentLoaded", function () {
    var card = document.getElementById("animatedCard");

    
    function toggleAnimation() {
        card.classList.toggle("pauseAnimation");
    }

    
    setInterval(toggleAnimation, 10000); 
});




// Bar values Animation
document.addEventListener("DOMContentLoaded",function(){
    const skillBars = {
        HTML: 95,
        CSS: 90,
        JavaScript: 65,
        SASS: 60,
        C: 70,
        "C++": 90,
        Python: 70,
        Java: 80
    };


function animateDivBar(B_ID,B_width){
    const Bar = document.getElementById(B_ID);
    Bar.style.width = "0%";

    const KeyFrame = [

        {width: "0%"},
        {width: B_width + "%"}
    ];


    const animation = Bar.animate(KeyFrame, {
        duration: 2000,
        fill: "forwards",
        easing: "ease-in-out"
    });

}


const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            Object.keys(skillBars).forEach(skill => {
                animateDivBar(skill, skillBars[skill]);
            });
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(document.querySelector('.skills_section'));

});