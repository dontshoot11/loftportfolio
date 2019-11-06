<template lang="pug">
       li.edit-card__tag
                  p.edit-card__description {{tag}}
                  button(type="button").button.edit-card__cross 
</template>

<script>
export default {
    props:{tag:""}
}
</script>