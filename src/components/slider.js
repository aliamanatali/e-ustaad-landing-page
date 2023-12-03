import React, { Component } from "react";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    return (
      <div className="my-5">

        <Slider className="d-flex justify-content-between" {...settings}>
          <div>
  
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="subjName mt-3">Computer Science</p>
            </div>
        </div>
          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="subjName mt-3">Physics</p>
            </div>
          </div>
        </div>
          <div>

          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>

              <p className="subjName mt-3">Chemistry</p>
            </div>
        </div>
          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>

              <p className="subjName mt-3">Biology</p>
            </div>
        </div>

          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>

              <p className="subjName mt-3">Mathematics</p>
            </div>
          </div>

          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="subjName mt-3">Pak Studies</p>
            </div>
        </div>
          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="subjName mt-3">Physics</p>
            </div>
          </div>
          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="subjName mt-3">Physics</p>
            </div>
          </div>
          </div>
          <div>
          <div className='card'>
            <div className='card-body svggg row text-center d-flex justify-content-center'>
              <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.2383" cy="49.2383" r="49.2383" fill="url(#paint0_linear_82_4481)"/>
                <rect x="35.167" y="56.666" width="28.6667" height="7.16667" rx="3.58333" stroke="white" stroke-width="2"/>
                <path d="M36.0765 47.2816L42.3337 56.6673H56.667L62.9242 47.2816C63.3595 46.6285 63.5772 46.302 63.542 45.9462C63.5068 45.5904 63.2293 45.3129 62.6743 44.7579L49.5003 31.584L36.3264 44.7579C35.7714 45.3129 35.4939 45.5904 35.4587 45.9462C35.4234 46.302 35.6411 46.6285 36.0765 47.2816Z" stroke="white" stroke-width="2"/>
                <path d="M53.875 47.709C53.875 50.1252 51.9162 52.084 49.5 52.084C47.0838 52.084 45.125 50.1252 45.125 47.709C45.125 45.2927 47.0838 43.334 49.5 43.334C51.9162 43.334 53.875 45.2927 53.875 47.709Z" stroke="white" stroke-width="2"/>
                <path d="M49.5 31.584V44.1257" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear_82_4481" x1="22.5" y1="8.60596" x2="70" y2="95.606" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4F9AF8"/>
                <stop offset="1" stop-color="#1C6ED5"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="subjName mt-3">Physics</p>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}