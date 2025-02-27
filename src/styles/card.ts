import { css } from "lit";

export const cardStyle = css`
  .entur-header {
    display: flex;
    padding: 1rem 1rem 0 1rem;
  }

  .entur-header__name {
    flex: 1;
  }

  .entur-header__time {
    align-self: flex-end;
  }

  .entur-column {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.3rem;
  }

  .entur-route {
  }

  .entur-route.divided {
    border-bottom: 1px solid var(--divider-color);
  }

  .entur-route:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }

  .entur-route__name {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--primary-text-color);
    font-weight: 300;
    margin: 0;
    font-size: 2rem;
    height: 3rem;
    justify-content: center;
  }

  .entur-route__icon {
    align-self: center;
    width: 100%;
    height: auto;
    display: none;
  }

  .entur-route__lines {
    font-size: 2.6rem;
  }

  .entur-line__icon {
    --mdc-icon-size: 20px;
    line-height: 0;
  }

  .entur-line.divided {
    border-top: 1px solid var(--divider-color);
  }

  .entur-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 0.5rem;
    margin-block: 0.25rem;
    padding-block: 0.25rem;
    white-space: nowrap;
    justify-content: space-between;
  }

  .entur-line__header {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: 0.15rem;
    margin-top: 0.3rem;
    color: var(--primary-text-color);
    font-weight: 400;
    max-width: 50%;
    overflow: hidden;
    height: 2.5rem;
    justify-content: center;
  }

  .entur-line__hr {
    margin: 0;
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .entur-line__delay {
    --mdc-icon-size: 19px;
    font-size: 0.9rem;
    color: var(--error-color);
  }

  .entur-line__due {
    color: "#ffffff";
  }

  .entur-line__due.icon-right {
    flex-direction: row-reverse;
  }

  .entur-line__due.icon-hidden ha-icon {
    display: none;
  }

  .entur-line__next {
    color: var(--secondary-text-color);
    font-size: 1rem;
    margin-top: 8px;
  }
`;
