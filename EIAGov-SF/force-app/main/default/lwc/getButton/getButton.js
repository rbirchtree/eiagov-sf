import { LightningElement } from 'lwc';

export default class GetButton extends LightningElement {
async handleClick() {
  try {
    const response = await fetch("https://api.eia.gov/v2/seriesid/ELEC.SALES.CO-RES.A?api_key=AKzBSWPzSieVHaUwSmK5KxMGccJBP0OACaRjEHYA");
		console.log('response',response);
		if (!response.ok) {
      throw Error(response);
    }
    const myItems = await response.json();
  } catch (error) {
    console.error("There's a problem with your fetch operation:", error);
  } finally {
    // do something regardless of whether the operation was successful
  }
}
}