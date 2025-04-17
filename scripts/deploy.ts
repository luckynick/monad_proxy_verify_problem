import hre from "hardhat";

const { ethers, upgrades } = hre;

async function main() {
  const ContractFactory = await ethers.getContractFactory("MyToken");

  
  const instance = await upgrades.deployProxy(ContractFactory, []);
  await instance.waitForDeployment();
  const address = await instance.getAddress();

  console.log(`Proxy deployed to ${address}`);

  await hre.run("verify:verify", {
    address,
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
