<template>
    <div class="counter__home">
        <div class="grid">
            <CountDown />
            <CountDown />
            <CountDown />

        </div>
        <div class="grid">
            <div>
                <h2>Hard Coded Dates</h2>
                <div class="counter">
                    <Counter                                             
                        :year="2024"
                        :month="22"
                        :date="22"
                        :hour="23"
                        :minute="23"
                        :second="22"
                        :millisecond="22"
                    />
                </div>
            </div>
                <div>
                    <h2>Hard Coded Dates</h2>
                    <div class="counter">
                        <Counter                                             
                            :year="2023"
                            :month="12"
                            :date="21"
                            :hour="23"
                            :minute="23"
                            :second="22"
                            :millisecond="22"
                        />
                    </div>
                </div>
            <div>
                <h2>Hard Coded Dates</h2>
                <div class="counter">
                    <Counter                                             
                        :year="2023"
                        :month="12"
                        :date="10"
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

  body{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      height: 100vh;
  }

  .counter{
    /* border: 1px solid #dedede; */
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 20px;
  }

    .counter__home{
        width: 100%;
        display: grid;
        gap: 20px;
        place-items: center;
        background: black;
        color:aliceblue;
        padding: 0 50px;
        height: 100vh;
    }

    .counter__home h2{
        color: #087e8b;
    }

    .counter__thumb{
        display: flex;
        padding: 20px 0;
        width: 100%;
        justify-content: space-between;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        width: 100%;
    }
</style>