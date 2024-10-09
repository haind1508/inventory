import { createI18n } from 'vue-i18n'

const messages = {
    ja: {
        error_title: "エラー",
        confirm_title: "確認",
        notification_title: "通知",

        confirm_register_msg: "登録情報を確認しますか。",
        confirm_update_msg: "情報変更を確認しますか。",
        confirm_delete_msg: "この担当者情報を削除します。",

        notify_register_msg: "登録が成功しました。",
        notify_update_msg: "情報を更新しました。",
        notify_delete_msg: "情報は正常に削除されました。",

        change_password_success: "情報を更新しました。",
        confirm_change_not_auto_update_on: "情報を自動更新しないことになります。よろしいでしょうか",
        confirm_change_not_auto_update_off: "情報を自動更新することになります。よろしいでしょうか",

        confirm_close_staff_detail: "編集また新規作成情報を放棄します。"
    },
    en: {

    },
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
    legacy: false, // <--- 3
    globalInjection: true, // <--- 4
    messages, // <--- 5
})
