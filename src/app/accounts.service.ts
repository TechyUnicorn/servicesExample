import { Injectable ,EventEmitter} from "@angular/core";
import { LoggingService } from "./logging.service";
  

@Injectable()
export class AccountsService {

  updateStatus = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}
  accounts = [
    {
      name: "Master Account",
      status: "active"
    },
    {
      name: "Testaccount",
      status: "inactive"
    },
    {
      name: "Hidden Account",
      status: "unknown"
    }
  ];

  onStatusAdded(name: string, status: string) {
    this.loggingService.logStatusChange(status);
    this.accounts.push({ name: name, status: status });
  }

  onStatusUpdated(id: number, status: string) {
    this.loggingService.logStatusChange(status);
    this.accounts[id].status = status;
  }
}
