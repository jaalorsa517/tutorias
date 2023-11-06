import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import InputSearch from "../../src/components/InputSearch.vue";
import { HTTPSERVICE } from "../../src/models/inject.models";

describe("InputSearchComponent", () => {
  it("[Component InputSearch] Mount", async () => {
    const wrapper = mount(InputSearch, {
      global: {
        provide: {
          [HTTPSERVICE as any]: {
            get: vi.fn(),
          },
        },
      },
    });
    const component = wrapper.find(".app__query");
    const input = wrapper.find(".app__input");
    const button = wrapper.find(".app__button");
    expect(component.exists()).toBeTruthy();
    expect(input.attributes("placeholder")).toBe("Name or Number");
    expect(button.text()).toBe("Search");
    wrapper.unmount();
  });

  it("[Component InputSearch] Click button or input key enter and input have value", async () => {
    const wrapper = mount(InputSearch, {
      global: {
        provide: {
          [HTTPSERVICE as any]: {
            get: vi.fn().mockResolvedValueOnce({
              name: "ditto",
              id: 132,
              sprites: {
                other: {
                  "official-artwork": {
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
                  },
                },
              },
            }),
          },
        },
      },
    });

    const input = wrapper.find(".app__input");
    const button = wrapper.find(".app__button");

    await input.setValue("ditto");
    await button.trigger("click");
    await wrapper.trigger("search");

    expect(wrapper.emitted().search[0]).toMatchObject([
      {
        name: "ditto",
        number: "132",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      },
    ]);
    
    await input.trigger("keydown.enter")
    
    expect(wrapper.emitted().search[0]).toMatchObject([
      {
        name: "ditto",
        number: "132",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      },
    ]);

    wrapper.unmount();
  });

  it("[Component InputSearch] Click button and input don't have value", async () => {
    const wrapper = mount(InputSearch, {
      global: {
        provide: {
          [HTTPSERVICE as any]: {
            get: vi.fn().mockRejectedValue(new Error()),
          },
        },
      },
    });
    const input = wrapper.find(".app__input");
    const button = wrapper.find(".app__button");

    await input.setValue("ditto");
    await button.trigger("click");
    await wrapper.trigger("search");

    const emmited = wrapper.emitted().search[0];

    expect(emmited).toMatchObject([undefined]);
  });

  it("[Component InputSearch] Click button and input don't have value", async () => {
    const wrapper = mount(InputSearch, {
      global: {
        provide: {
          [HTTPSERVICE as any]: {
            get: vi.fn(),
          },
        },
      },
    });
    const button = wrapper.find(".app__button");

    await button.trigger("click");
    expect(wrapper.emitted().search).toBeUndefined();
  })
});
