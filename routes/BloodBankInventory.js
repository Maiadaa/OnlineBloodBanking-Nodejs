const { Router } = require('express');
const InventoryController = require('../controllers/BloodBankInventoryController');

const BloodBankInventoryRouter = Router();
BloodBankInventoryRouter.post('/CreateBloodBankInventory/',InventoryController.postBloodInventory);
BloodBankInventoryRouter.put('/AddBloodBag/:inventoryID',InventoryController.postBloodBagRequest);
BloodBankInventoryRouter.get('/ShowAllPendingBags/:inventoryID',InventoryController.findPendingBags);
BloodBankInventoryRouter.post('/AcceptBloodBag/:hospitalID/:bloodBagID',InventoryController.postAcceptBloodBag);
module.exports = BloodBankInventoryRouter;