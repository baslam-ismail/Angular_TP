import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  displayTicketArchived : boolean = false;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);

  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }
  
  ticketDeleted(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket);
   
  }

  filterTickets() {
    if (this.displayTicketArchived) {
      return this.ticketList.filter(ticket => ticket.archived);
    } else {
      return this.ticketList.filter(ticket => !ticket.archived);
    }
  }

}
