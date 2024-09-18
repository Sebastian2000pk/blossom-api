import { initializeApp } from "firebase-admin/app";
import { auth } from "firebase-admin";
import { credential } from "firebase-admin";
import { Auth } from "firebase-admin/auth";
import { config } from "../config";

class Firebase {
  private auth: Auth;

  constructor() {
    initializeApp({
      credential: credential.cert({
        projectId: config.FIREBASE_PROJECT_ID,
        privateKey: config.FIREBASE_PRIVATE_KEY,
        clientEmail: config.FIREBASE_CLIENT_EMAIL,
      }),
    });
    this.auth = auth();
  }

  async verifyIdToken(token: string) {
    try {
      return await this.auth.verifyIdToken(token);
    } catch (error) {
      return null;
    }
  }
}

export const firebase = new Firebase();
