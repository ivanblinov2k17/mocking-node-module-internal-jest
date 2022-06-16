import Hello from "./Hello.vue"
import { mount } from "@vue/test-utils"

describe("Hello", () => {
    it("renders correctly", async () => {
        const wrapper = mount(Hello, {
            props: {
                name: "Hello",
            },
        })
        expect(wrapper.element).toMatchSnapshot()
    })
})
