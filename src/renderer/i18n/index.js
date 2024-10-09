import { createI18n } from 'vue-i18n'

const messages = {
    vi: {
        attr: {
            product: {
                name: "Mặt hàng",
                SKU: "SKU",
                unit: "Đơn vị",
                price: "Giá",
                expire: "Hạn",
                remark: "Ghi chú",
            }
        },
        button: {
            search: "Tìm",
            clear: "Làm mới",
            save: "Lưu",
            cancel: "Hủy",
            back: "Quay lại",
            refresh: "Tải lại",
        }
    }
}

export default createI18n({
    locale: 'vi', // <--- 1
    // fallbackLocale: 'en', // <--- 2
    legacy: false, // <--- 3
    globalInjection: true, // <--- 4
    messages, // <--- 5
})
