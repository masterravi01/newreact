import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

const client = new Client().setProject("<PROJECT_ID>"); // Your project ID

const account = new Account(client);

const promise = account.create("[USER_ID]", "email@example.com", "");

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setProject(conf.appwriteProjectId);
    this.account = new Account(client);
  }
  async createAccount({ email, password, name }) {
    const userAccount = this.account.create(ID.unique(), email, password, name);
    if (userAccount) {
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  }
  async login({ email, password }) {
    return this.account.createEmailPasswordSession(email, password, name);
  }
  async getCurrentUser() {
    return this.account.get();
  }
  async logout() {
    return this.account.deleteSessions();
  }
}

const authService = new AuthService();

export default authService;
