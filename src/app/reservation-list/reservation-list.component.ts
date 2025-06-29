import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent], // imports
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
    this.reservations = this.reservationService.getReservations();
  }
}
