<template>
    <div>
        <BreadCrumb/>
        <h1 class="title">新規会員登録</h1>
        <form>
        <div class="form-group">
            <label for="email">メールアドレス</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="password">パスワード</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
            <label for="password2">パスワード確認</label>
            <input type="password" id="password2" name="password2" required>
        </div>
        </form>
    </div>    
</template>

<script>
export default {

}
</script>

<style>

</style>