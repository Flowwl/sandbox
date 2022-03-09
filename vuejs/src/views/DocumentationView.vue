<template>
    <div>
        <p>{{ this.msg /** mustache syntax */ }}</p>

        <h1>Directives</h1>
        <p>Using text interpolation: {{ this.rawHtml }}</p>
        <p>Using v-html directive: <span v-html="this.rawHtml"></span></p>
        <p :id="this.dynamicId">Using v-bind directive: this html has id {{ this.dynamicId }}</p>
        <p v-bind="this.objectOfAttrs">Using v-bind directive, we can set an entire object</p>
        <p v-bind:[this.objectOfAttrs.test]="dynamic">Using v-bind directive, we can set an dynamic attributes</p>
        <p v-for="item in this.list">Using v-for directive, {{ item }}</p>
        <button @click="increment">Using v-on directive, {{ count }}</button>

        <h1>Computed properties</h1>

        <p>Using computed properties, {{ hasCountBeenPushed }}</p>

        <h1>Class & style binding</h1>
        <p :class="{blue: true, big: false}">Using class binding, this text is blue</p>

        <h1>Forms</h1>
        <input v-model="this.form">
    </div>
</template>

<script>
    export default {
        name: "DocumentationView",
        data() {
            return {
                msg: "Mustache syntax",
                rawHtml: "<span style=\"color: red\">This should be red.</span>",
                dynamicId: "hello",
                objectOfAttrs: {
                    id: 'container',
                    class: 'wrapper',
                    test: "class"
                },
                list: ["1", "2"],
                count: 0,
                form: "toto"
            };
        },
        methods: {
            increment() {
                this.count++;
            }
        },
        computed: {
            hasCountBeenPushed() {
                return this.count > 0 ? "count pushed" : "count not already pushed";
            }
        },
        watch: {
           form(newForm, oldForm) {
               console.log(`form has been changed (${oldForm} -> ${newForm})`)
           }
        },


        /** LIFECYCLES HOOKS */
        beforeCreate() {
            console.log(`the component is not created yet.`)
        },
        created() {
            console.log(`the component is now created.`)
        },
        beforeMount() {
            console.log(`the component is not mounted yet.`)
        },
        mounted() {
            console.log(`the component is now mounted.`)
        },
        beforeUpdate() {
            console.log(`the component is not updated yet.`)
        },
        updated() {
            console.log(`the component have been updated.`)
        },
        beforeUnmount() {
            console.log(`the component is not unmounted yet.`)
        },
        unmounted() {
            console.log(`the component is now unmounted.`)
        }
    };

</script>

<style scoped>
    .blue {
        color: blue
    }

    .big {
        font-size: 40px;
    }
</style>
