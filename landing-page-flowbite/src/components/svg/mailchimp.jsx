const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 137 37"
    {...props}
  >
    <path d="M53.323 13.964c-1.735 0-2.593 1.364-2.986 2.245-.22.492-.282.88-.46.88-.252 0-.072-.338-.277-1.087-.271-.985-1.087-2.038-2.82-2.038-1.822 0-2.602 1.54-2.973 2.385-.253.579-.253.74-.447.74-.282 0-.049-.46.078-1 .25-1.063.06-1.875.06-1.875h-2.889v10.862h3.943V19.67c0-1.066.446-2.418 1.21-2.418.884 0 1.06.678 1.06 1.934v5.891h3.96v-5.407c0-.948.386-2.418 1.215-2.418.896 0 1.054.953 1.054 1.934v5.889h3.888v-6.388c0-2.834-1-4.724-3.616-4.724ZM120.249 13.964c-1.735 0-2.593 1.364-2.987 2.245-.22.492-.281.88-.46.88-.251 0-.083-.429-.276-1.087-.289-.98-1.008-2.038-2.82-2.038-1.822 0-2.603 1.54-2.973 2.385-.253.579-.253.74-.447.74-.282 0-.049-.46.078-1 .25-1.063.06-1.875.06-1.875h-2.889v10.862h3.943V19.67c0-1.066.446-2.418 1.21-2.418.883 0 1.06.678 1.06 1.934v5.891h3.959v-5.407c0-.948.387-2.418 1.216-2.418.896 0 1.054.953 1.054 1.934v5.889h3.888v-6.388c0-2.834-1-4.724-3.616-4.724ZM62.714 22.537c-.943.218-1.432-.072-1.432-.697 0-.857.886-1.2 2.15-1.2.557 0 1.08.049 1.08.049 0 .366-.795 1.617-1.798 1.848Zm.96-8.57c-3.02 0-5.188 1.11-5.188 1.11v3.263s2.394-1.375 4.335-1.375c1.55 0 1.74.835 1.67 1.529 0 0-.447-.118-1.811-.118-3.214 0-4.836 1.46-4.836 3.802 0 2.222 1.823 3.15 3.36 3.15 2.24 0 3.226-1.506 3.529-2.22.21-.496.248-.83.437-.83.215 0 .142.24.132.733-.018.864.023 1.517.16 2.067h2.971v-5.345c0-3.338-1.18-5.767-4.76-5.767ZM74.926 25.078h3.943V10.926h-3.943v14.152ZM83.211 19.647c0-.976.907-1.865 2.573-1.865 1.815 0 3.275.874 3.602 1.072v-3.777s-1.153-1.11-3.988-1.11c-2.988 0-5.476 1.748-5.476 5.511s2.258 5.85 5.468 5.85c2.508 0 4.003-1.377 4.003-1.377v-3.589c-.473.265-1.79 1.18-3.59 1.18-1.907 0-2.592-.877-2.592-1.895ZM97.373 13.966c-2.282 0-3.15 2.163-3.326 2.539-.175.375-.262.591-.406.587-.249-.008-.075-.461.022-.755.184-.554.573-2.007.573-3.794 0-1.212-.164-1.617-.164-1.617h-3.404v14.152h3.943v-5.404c0-.88.351-2.419 1.345-2.419.822 0 1.08.61 1.08 1.838v5.985h3.943v-5.75c0-2.787-.462-5.362-3.606-5.362ZM102.258 14.229v10.85h3.943v-10.85s-.663.387-1.968.387c-1.304 0-1.975-.387-1.975-.387ZM104.218 10.816c-1.333 0-2.413.705-2.413 1.575s1.08 1.575 2.413 1.575c1.333 0 2.414-.705 2.414-1.575s-1.081-1.575-2.414-1.575ZM69.707 14.229v10.85h3.943v-10.85s-.663.387-1.968.387c-1.304 0-1.975-.387-1.975-.387ZM71.667 10.816c-1.332 0-2.413.705-2.413 1.575s1.08 1.575 2.413 1.575c1.334 0 2.414-.705 2.414-1.575s-1.08-1.575-2.414-1.575ZM130.616 22.744c-.904 0-1.569-1.147-1.569-2.745 0-1.551.683-2.744 1.538-2.744 1.097 0 1.565 1.006 1.565 2.744 0 1.808-.431 2.745-1.534 2.745Zm1.083-8.78c-2.027 0-2.956 1.52-3.36 2.385-.267.572-.253.74-.448.74-.282 0-.048-.46.079-1 .249-1.063.059-1.875.059-1.875h-2.888v13.862h3.943V23.68c.466.791 1.33 1.637 2.663 1.637 2.851 0 4.286-2.412 4.286-5.672 0-3.694-1.718-5.682-4.334-5.682ZM26.682 17.245c.265-.032.52-.034.753 0 .135-.31.158-.844.036-1.426-.18-.865-.425-1.388-.93-1.306-.505.081-.524.707-.343 1.572.101.486.282.902.484 1.16ZM22.344 17.929c.362.158.584.263.67.172.057-.058.04-.167-.046-.308-.179-.291-.546-.587-.935-.752-.796-.343-1.746-.23-2.478.297-.242.177-.471.423-.439.572.011.048.047.084.132.096.2.023.896-.33 1.699-.378.566-.035 1.036.142 1.397.3ZM21.615 18.344c-.47.074-.73.23-.897.373-.142.125-.23.262-.23.359 0 .046.02.072.036.086.022.019.047.03.078.03.106 0 .344-.096.344-.096.655-.235 1.087-.206 1.516-.158.236.027.348.042.4-.04.016-.023.034-.073-.013-.15-.11-.179-.586-.481-1.234-.404M25.216 19.867c.32.157.672.095.786-.138.115-.233-.051-.55-.371-.707-.32-.156-.672-.095-.786.138-.115.233.052.55.371.707ZM27.27 18.07c-.26-.004-.475.282-.48.638-.007.356.199.648.459.652.26.005.475-.28.48-.636.007-.357-.2-.649-.459-.653ZM9.83 24.492c-.065-.081-.17-.056-.273-.032a.973.973 0 0 1-.243.034.526.526 0 0 1-.443-.225c-.119-.182-.112-.453.019-.763.017-.042.038-.088.06-.139.209-.467.558-1.249.166-1.994-.294-.561-.775-.91-1.352-.984a1.738 1.738 0 0 0-1.49.537c-.574.634-.664 1.497-.553 1.801.04.112.104.143.15.15.098.012.243-.059.334-.302l.025-.08c.04-.128.116-.368.239-.56a1.043 1.043 0 0 1 1.446-.301c.402.263.557.756.385 1.226-.088.244-.233.709-.2 1.091.063.774.54 1.085.967 1.118.416.015.706-.218.78-.388.043-.101.007-.163-.017-.19" />
    <path d="M13.781 10.28c1.356-1.567 3.025-2.93 4.52-3.694.052-.027.107.03.08.08-.12.215-.348.676-.42 1.025-.012.055.047.095.093.064.93-.634 2.549-1.313 3.968-1.4.061-.005.09.074.042.11a3.383 3.383 0 0 0-.624.627.06.06 0 0 0 .047.097c.997.007 2.402.356 3.318.87.062.034.018.154-.052.138-1.385-.317-3.653-.558-6.01.017-2.103.513-3.708 1.305-4.88 2.156-.059.044-.13-.034-.082-.09Zm6.754 15.182v.002-.002Zm5.591.66a.108.108 0 0 0 .064-.108.102.102 0 0 0-.112-.091s-2.894.428-5.628-.573c.298-.968 1.09-.618 2.287-.522 2.157.129 4.09-.186 5.519-.596 1.238-.355 2.864-1.056 4.127-2.053.426.936.576 1.966.576 1.966s.33-.06.606.11c.26.16.451.494.32 1.355-.265 1.609-.949 2.915-2.098 4.117a8.655 8.655 0 0 1-2.521 1.884 10.64 10.64 0 0 1-1.647.695c-4.333 1.415-8.769-.14-10.199-3.482a5.364 5.364 0 0 1-.287-.79c-.609-2.201-.092-4.843 1.525-6.506.1-.106.202-.231.202-.388 0-.131-.084-.27-.156-.368-.566-.82-2.525-2.219-2.132-4.925.283-1.944 1.983-3.313 3.568-3.232l.401.023c.687.041 1.287.13 1.852.153.947.04 1.798-.097 2.806-.937.34-.283.612-.529 1.073-.607.049-.008.17-.052.41-.04.247.013.481.08.692.22.808.538.922 1.84.964 2.793.024.544.09 1.86.112 2.238.052.864.279.985.738 1.137.258.085.498.148.852.247 1.07.3 1.704.605 2.103.997.239.244.35.504.384.752.126.92-.715 2.057-2.94 3.09-2.432 1.128-5.383 1.414-7.422 1.187a491 491 0 0 1-.714-.08c-1.63-.22-2.561 1.888-1.582 3.332.63.93 2.349 1.536 4.068 1.536 3.941 0 6.97-1.683 8.098-3.136.034-.044.037-.048.09-.129.055-.083.01-.13-.06-.082-.92.63-5.01 3.131-9.384 2.379 0 0-.532-.088-1.017-.276-.386-.15-1.193-.522-1.29-1.35 3.53 1.092 5.752.06 5.752.06Zm-19.39-8.39c-1.227.239-2.31.935-2.971 1.896-.396-.33-1.132-.968-1.263-1.217-1.056-2.006 1.153-5.906 2.697-8.109C9.013 4.86 14.987.74 17.752 1.487c.45.127 1.939 1.853 1.939 1.853s-2.764 1.534-5.328 3.672c-3.454 2.66-6.063 6.526-7.627 10.72ZM8.8 26.937a2.938 2.938 0 0 1-.566.04c-1.847-.05-3.843-1.713-4.041-3.685-.22-2.18.895-3.858 2.867-4.256.236-.047.52-.075.828-.059 1.105.061 2.733.91 3.105 3.317.33 2.132-.194 4.302-2.193 4.643Zm25.024-3.86c-.016-.056-.119-.433-.26-.887-.142-.454-.288-.774-.288-.774.568-.85.578-1.611.502-2.042-.08-.534-.303-.99-.75-1.46-.45-.47-1.366-.952-2.654-1.313-.147-.042-.633-.175-.675-.188-.004-.028-.036-1.593-.065-2.265-.022-.486-.063-1.244-.299-1.991-.28-1.011-.769-1.896-1.378-2.462 1.683-1.745 2.733-3.667 2.73-5.315-.004-3.171-3.898-4.13-8.697-2.144l-1.017.432c-.004-.004-1.838-1.803-1.865-1.827C13.636-3.932-3.471 15.082 1.998 19.7l1.196 1.012c-.31.803-.432 1.723-.333 2.713.128 1.27.784 2.489 1.846 3.43 1.009.894 2.335 1.46 3.622 1.458 2.128 4.905 6.991 7.914 12.693 8.083 6.116.182 11.25-2.688 13.402-7.843.14-.362.738-1.992.738-3.431 0-1.447-.818-2.046-1.339-2.046Z" />
  </svg>
);

export default SvgComponent;
