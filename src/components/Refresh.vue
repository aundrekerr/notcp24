<template>
  <button
    class="refresh"
    :class="fetching ? 'fetching' : '' "
  >
    <svg viewBox="0 0 140 140">
        <g transform="scale(5.833333333333333,5.833333333333333)">
          <path
            fill="#fafafa"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M6.177,6.167A8.233,8.233,0,0,1,14.528,4.14a1.249,1.249,0,1,0,
            .76-2.38A10.751,10.751,0,0,0,2.046,16.033a.248.248,0,0,1-.094.3l-1.4.922A1,
            1,0,0,0,.9,19.071l4.407.908a.99.99,0,0,0,.2.021,1,1,0,0,0,.979-.8L7.4,
            14.794a1,1,0,0,0-1.529-1.037l-1.339.881a.25.25,0,0,1-.376-.133A8.269,
            8.269,0,0,1,6.177,6.167Z"></path>
          <path
            fill="#fafafa"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M23.883,5.832a1,1,0,0,0-.763-.807l-4.388-1a1,1,0,0,0-1.2.752l-1,
            4.387a1,1,0,0,0,1.507,1.069l1.443-.906A.247.247,0,0,1,19.7,9.3a.252.252,
            0,0,1,.153.159A8.249,8.249,0,0,1,9.568,19.883a1.25,1.25,0,1,0-.737,
            2.388A10.75,10.75,0,0,0,21.985,8a.248.248,0,0,1,.1-.3l1.346-.846A1,
            1,0,0,0,23.883,5.832Z"></path>
          </g>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'Refresh',
  props: {
    fetching: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  button.refresh {
    margin-right: 0.5rem;
    cursor: pointer;
    outline: none;

    &:hover { svg path { fill: var(--brandPrimary); } }
    &:focus { svg path { fill: var(--brandAccent); } }

    svg {
      width: 1.2rem;
      height: 1.2rem;

      path {
        transition: fill 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }

    &.fetching {
      animation: rotate 0.5s ease-in-out forwards;
    }
  }

  button[disabled="disabled"] {
    cursor: default;
    pointer-events: none;

    svg path { fill: var(--brandPrimaryAlt); }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(180deg); }
  }
</style>
