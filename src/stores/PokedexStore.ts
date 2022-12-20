import { makeAutoObservable, runInAction } from "mobx";
import { NamedAPIResourceList } from "pokenode-ts";
import { getPokemonList } from "../Api";

const PokedexStore = () => makeAutoObservable({
    searchQuery: "",
    handleSearchQuery(value: string) {
      this.searchQuery = value;
    },
    loading: false,
    namedList: {} as NamedAPIResourceList,
    async getNamedList(offset: number, limit: number) {
      this.loading = true;
      const data = await getPokemonList(offset, limit);
      runInAction(() => {
        this.loading = false;
        this.namedList = data;
      });
    }
});

export default PokedexStore;