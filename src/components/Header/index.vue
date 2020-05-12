<template>
  <header class="main-header flex justify-center items-center text-white">
    notcp24 :)

    <div class="status"><i tabindex="0"></i></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header.main-header {
    background: var(--black);
    padding: 0.5rem;

    @media screen and (max-width: 768px) {
      padding: 1.5rem 0.5rem;
    }
  }

  .status {
    margin-left: 1rem;

    i {
      position: relative;
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      padding: 0.5rem;
      border-radius: 50%;
      background: #48BB78;
      border-color: #2F855A;
      box-shadow: 0 0 10px #48BB78;
      z-index: 50;

      &:before {
        content: 'You\'re online!';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;
        opacity: 0;
        width: max-content;
        background: var(--black);
        border: 1px solid var(--white);
        border-radius: 3px;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        font-style: normal;
        text-align: center;
        min-width: 100px;
        transition: top 0.15s ease-in-out, opacity 0.15s ease-in-out;
      }

      &:after {
        content:'';
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        pointer-events: none;
        opacity: 0;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 10px solid var(--white);
        transition: top 0.15s ease-in-out, opacity 0.15s ease-in-out;
      }

      &:hover, &:focus {
        outline: none;
        &:before { top: calc(100% + 0.75rem); opacity: 1; }
        &:after { top: calc((100% + 0.25rem) - 1px); opacity: 1; }
      }
    }
  }

  body.offline .status i {
    background: #E53E3E;
    border-color: #C53030;
    box-shadow: 0 0 10px #E53E3E;

    &:before {
      content: 'No connection found, offline mode.';
    }
  }
</style>
