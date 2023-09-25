<template>
    <div class="counter__home">
        <div class="counter">
            <div class="article-thumb">
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

</template>

<script>


</script>

<style>
.counter__home{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}
.article-thumb{
    display: flex;
}
</style>