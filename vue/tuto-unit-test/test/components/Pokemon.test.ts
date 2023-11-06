import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PokemonComponent from "../../src/components/Pokemon.vue";

describe("Component Pokemon", () => {
  it("[Component Pokemon] Mount with props", async () => {
    const wrapper = mount(PokemonComponent, {
      props: {
        pokemon: {
          name: "ditto",
          number: "132",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        },
      },
    });

    const id = wrapper.find(".app__id");
    const name = wrapper.find(".app__name");
    const image = wrapper.find(".app__image img");

    expect(id.text()).toBe("132");
    expect(name.text()).toBe("ditto");
    expect(image.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    );
  });

  it("[Component Pokemon] Mount without props", async () => {
    const wrapper = mount(PokemonComponent);
    expect(wrapper.find(".app__result h4").exists()).toBeTruthy()
  })

  it("[Component Pokemon] Change the prop", async () => {
    const wrapper = mount(PokemonComponent);
    expect(wrapper.find(".app__result h4").exists()).toBeTruthy()

    await wrapper.setProps({
      pokemon: {
        name: "ditto",
        number: "132",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      },
    })
    const id = wrapper.find(".app__id");
    const name = wrapper.find(".app__name");
    const image = wrapper.find(".app__image img");

    expect(id.text()).toBe("132");
    expect(name.text()).toBe("ditto");
    expect(image.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    );
  })
});
