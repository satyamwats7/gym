import React from 'react'
import image from '../Assests/weightlifting.png'

function Feature() {
  return (
    <div id="Main">
      <div className="features">
        <h1>FEATURES</h1>

      
      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src={'https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" />
            </figure>
            <div class="article-body">
              <h2>Weightlifting</h2>
              <p>
                  Weightlifting is a dynamic and strength-focused sport that involves lifting heavy weights in two primary movements: the snatch and the clean and jerk. 
              </p>
              {/* <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a> */}
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" />
            </figure>
            <div class="article-body">
              <h2>Muscles</h2>
              <p>
                  Muscles are vital tissues in the human body responsible for movement, stability, and support. Comprising approximately 40% of body weight, they are classified as skeletal, smooth, or cardiac. Skeletal muscles, attached to bones by tendons, enable voluntary movements.
              </p>
              {/* <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a> */}
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={'https://images.pexels.com/photos/2985098/pexels-photo-2985098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" />
            </figure>
            <div class="article-body">
              <h2>Yoga</h2>
              <p>

                  Yoga, originating from ancient India, is a holistic practice that combines physical postures, breath control, meditation, and ethical principles to promote physical, mental, and spiritual well-being. It emphasizes the unity of mind and body, fostering flexibility, strength, and balance. 
              </p>
              
                {/* Read more <span class="sr-only">about this is some title</span> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg> */}
              {/* </a> */}
            </div>
          </div>
        </article>
      </section>
      </div>
    </div>
  )
}
export default Feature
