export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    onStatusAdded(name: string, status: string){
        this.accounts.push({name: name,status: status});
    }

    onStatusUpdated(id: number, status: string){
        this.accounts[id].status = status;
    }
}