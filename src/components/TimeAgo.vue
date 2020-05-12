<template>
  <timeago
    class="text-xs leading-none"
    :datetime="fetching ? new Date() : new Date()"
    :auto-update="60" />
</template>

<script>
export default {
  name: 'TimeAgo',
  props: {
    fetching: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  time {
    color: var(--white);
    margin-right: auto;

    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
</style>
