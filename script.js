const homePageBtn = document.getElementsByClassName("home-page-btn")[0];

const aboutPageBtn = document.getElementsByClassName("about-page-btn")[0];

const main = document.querySelector("#content")

homePageBtn.addEventListener("click", (e)=>{
    console.log("I'm home !!!")
    main.innerHTML = `<div class="homeContent">
  <div class="textContent">
    <div class="title">$whoami</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      aspernatur quibusdam veniam similique. Corporis voluptatum reprehenderit
      minus unde commodi aliquam dolore quo voluptate Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Consectetur cum excepturi necessitatibus
      consequatur modi enim quod ut perspiciatis quam officia.
    </p>
  </div>

  <div class="techStacksList">
    <svg
      id="parentSVG"
      height="230"
      width="180"
      viewBox="3.58301931 1.90851839 24.83198069 28.09192829"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#00d486" id="pathToChange">
        <path
          d="m16 30a2.151 2.151 0 0 1 -1.076-.288l-3.424-2.027c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 0 0 1.549-.7.263.263 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.323.323 0 0 0 .157-.278v-11.846a.331.331 0 0 0 -.159-.283l-10.26-5.917a.323.323 0 0 0 -.317 0l-10.254 5.919a.33.33 0 0 0 -.162.281v11.841a.315.315 0 0 0 .161.274l2.814 1.624c1.525.762 2.459-.136 2.459-1.038v-11.691a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 0 1 -2.363-.642l-2.697-1.547a2.166 2.166 0 0 1 -1.076-1.872v-11.841a2.162 2.162 0 0 1 1.076-1.875l10.261-5.924a2.246 2.246 0 0 1 2.156 0l10.26 5.924a2.165 2.165 0 0 1 1.077 1.87v11.846a2.171 2.171 0 0 1 -1.077 1.872l-10.26 5.924a2.152 2.152 0 0 1 -1.078.288z"
        />
        <path
          d="m14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032 2.161 0 3.082-.489 3.082-1.636 0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144 0-2.07 1.745-3.305 4.67-3.305 3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1 -.295.323h-1.336a.3.3 0 0 1 -.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36 0-2.634.822-2.634 1.438 0 .746.324.964 3.51 1.385 3.153.417 4.651 1.007 4.651 3.223 0 2.236-1.864 3.516-5.115 3.516-4.495.006-5.436-2.055-5.436-3.784z"
        />
      </g>
    </svg>

    <svg
      id="parentSVG"
      fill="none"
      height="230"
      width="180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53199999999998"
    >
      <path
        id="pathToChange"
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill="#e34f26"
      />
      <path
        id="pathToChange"
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ef652a"
      />
      <path
        d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
        fill="#fff"
      />
    </svg>

    <svg
      id="parentSVG"
      fill="none"
      height="230"
      width="180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53"
    >
      <path
        id="pathToChange"
        d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
        fill="#1b73ba"
      />
      <path
        id="pathToChange"
        d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
        fill="#1c88c7"
      />
      <path
        d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
        fill="#fff"
      />
    </svg>

    <svg
      id="parentSVG"
      fill="none"
      height="230"
      width="180"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53199999999998"
    >
      <path
        id="pathToChange"
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill="#e9ca32"
      />
      <path
        id="pathToChange"
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill="#ffde25"
      />
      <g fill="#fff">
        <path
          d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"
        />
      </g>
    </svg>
  </div>
</div>`;

})

aboutPageBtn.addEventListener("click",(e)=>{
    main.innerHTML = `<div class="aboutContent">
          <div class="title">$whoami</div>
          <div class="contentFrame">
            <div class="aboutContentGridItems aboutText">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                consequatur? Recusandae voluptates error et expedita ipsum
                molestiae eum atque. Animi soluta ab inventore minima illo,
                harum laboriosam, unde quos culpa placeat beatae dolorum quis!
                Mollitia sint eligendi, iusto veniam molestias sed? Non vitae,
                recusandae ullam voluptate reiciendis laudantium ab quasi beatae
                quae repellendus excepturi asperiores quis voluptates
                distinctio, iusto obcaecati nobis fugiat quaerat itaque soluta
                facilis. Amet vel obcaecati nulla quibusdam quod omnis autem ex
                dignissimos eaque laudantium, non blanditiis? Nam optio nostrum
                dolorem! Asperiores dolorem doloribus exercitationem totam ut,
                inventore vero maiores odio corrupti molestias nemo porro velit?
                Iste. soluta facilis. Amet vel obcaecati nulla quibusdam quod
                omnis autem ex dignissimos eaque laudantium, non blanditiis? Nam
                optio nostrum dolorem! Asperiores dolorem doloribus
                exercitationem totam ut, inventore vero maiores odio corrupti
                molestias nemo porro velit?
              </p>
            </div>

            <div class="line"></div>

            <div class="aboutContentGridItems contactsText">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quia dolorem cumque dignissimos esse nobis vero dolor rerum sequi repudiandae? </p>
            </div>

          </div>
        </div>
`;
})
// home-page-btns