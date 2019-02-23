<style lang="scss">

    .winMoving {
        position: fixed;
        height: auto;
        width: 250px;
        top: 200px;
        left: 150px;
        border: 1px solid #8585ff;

        /*transition: transform ease-out 50ms;*/

        .header {
            position: relative;
            padding: 0 15px;
            background-color: hsla(205, 70%, 78%, 0.74);

            -moz-user-select: -moz-none;
            /*-khtml-user-select: none;*/
            -webkit-user-select: none;

            /*
              Introduced in IE 10.
              See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
            */
            -ms-user-select: none;
            user-select: none;

            &:hover {
                background-color: hsla(205, 70%, 73%, 0.74);
                cursor: move;
            }
        }
        .body {
            position: relative;
        }
        .footer {
            position: relative;
            padding: 0 15px;
            background-color: hsla(205, 70%, 78%, 0.74);
        }

    }


</style>

<template>

    <!--@mousemove="dragDriver.moved && mouseMove($event)" -->
    <!--@mouseup="config.moveable && mouseUp($event)"-->
    <div class="winMoving" :id="config.id" :style="winStyle">

        <div class="header" style="padding-top: 1em; padding-bottom: 1em; margin-bottom: 1em;"
             @mousedown="config.moveable && mouseDown($event)">
            <slot name="header">header</slot>
        </div>

        <div class="body">
            <slot>body</slot>
        </div>

        <div class="footer"
             @click="clickFooter"
             style="padding-top: 1em; padding-bottom: 1em;">
            <slot name="footer">footer</slot>
        </div>

    </div>

</template>

<script>
    // import test from "@/test/test"
    export default {
        name: "winMoving",
        props: ['config'],
        components: {},
        data() {
            return {
                inited: 0,
                upfl: 0,
                dragDriver: {
                    winX: 0,
                    winY: 0,
                    moved: false,
                    start: {x: 0, y: 0},
                    d: {x: 0, y: 0},
                }

            }
        },
        computed: {
            winStyle(){
                return this.inited && {
                        transform: `translate3d(${this.dragDriver.d.x}px,${this.dragDriver.d.y}px,0)`,
                        left: `${this.dragDriver.winX}px`,
                        top: `${this.dragDriver.winY}px`
                    }
            },
        },
        methods: {
            mouseDown(e){
//                console.log('mouseDown:: =', e);
                this.dragDriver.start.x = e.screenX;
                this.dragDriver.start.y = e.screenY;
                window.addEventListener('mousemove', this.mouseMove);
                window.addEventListener('mouseup', this.mouseUp)
                this.dragDriver.moved = true;
                this.upfl = true;

            },
            mouseMove(e){
                if (this.upfl) {
                    this.dragDriver.d.x =  e.screenX - this.dragDriver.start.x;
                    this.dragDriver.d.y =  e.screenY - this.dragDriver.start.y;
//                    console.log(this.dragDriver.d.x);
//                    console.log(this.dragDriver.d.y);
                }
//                if(this.dragDriver.moved)console.log('mouseMove:: =', e);
            },
            mouseUp(){
                this.upfl = false;
                this.dragDriver.winX += this.dragDriver.d.x;
                this.dragDriver.winY += this.dragDriver.d.y;
                this.dragDriver.d.x = 0;
                this.dragDriver.d.y = 0;
                this.dragDriver.moved = false;
                window.removeEventListener('mousemove', this.mouseMove);
                window.removeEventListener('mouseup', this.mouseUp)
//                console.log(this.$el);
            },
            clickFooter(){
                this.$emit("click-footer", true);
                console.log("clickFooter");
            },

        }
        ,
        mounted()
        {
//           setTimeout(()=> console.dir(window['qwerty']),50)
//            console.dir(window[this.config.id]);
//            debugger;

            this.dragDriver.winX = window[this.config.id].offsetLeft;
            this.dragDriver.winY = window[this.config.id].offsetTop;
            this.inited = 1;
        }
        ,
    }
    ;
</script>


