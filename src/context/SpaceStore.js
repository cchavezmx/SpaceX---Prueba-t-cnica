import { create } from 'zustand'


const useSpaceStore = create((set) => ({
  missionSelected: {},
  setMissionSelected: (mission) => set({ missionSelected: mission }),
}))


export default useSpaceStore