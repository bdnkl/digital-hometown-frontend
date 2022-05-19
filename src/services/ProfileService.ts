import { doc, getDoc, setDoc } from "@firebase/firestore"
import { profileCollection } from "src/firebase-config"

class ProfileService {
  async addProfile(id: string, profile: Profile) {
    await this.updateProfile(id, profile)
  }

  async existsProfile(id: string) {
    const profile = await this.getDocument(id)
    return profile.exists()
  }

  async updateProfile(id: string, profile: Profile) {
    const userRef = doc(profileCollection, id)
    await setDoc(userRef, profile)
  }

  async getDocument(id: string) {
    const userRef = doc(profileCollection, id)
    return await getDoc(userRef)
  }

  async getProfile(id: string) {
    if (await this.existsProfile(id)) {
      return (await this.getDocument(id)).data()
    }
    return null
  }
}

export default ProfileService
