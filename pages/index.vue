<template>
    <div class="counter__home">
        <CountDown />
    <div>
                    <h1>Pre selected</h1>

        <div class="counter">
            <div class="counter__thumb">
                <Counter                                             
                    :year="2023"
                    :month="10"
                    :date="30"
                    :hour="23"
                    :minute="23"
                    :second="22"
                    :millisecond="22"
                />
            </div>
        </div>
    </div>
    </div>

</template>

<script>


</script>

<style >

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .counter{
  border: 1px solid #dedede;
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(10px);

  padding: 20px;
}


.counter__home{
    width: 100%;
    height: 100vh;
    display: grid;
    gap: 20px;
    place-items: center;
    background: black;
    color:aliceblue;
}

.counter__thumb{
    display: flex;
    padding: 20px 0;
}
</style>